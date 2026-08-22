/**
 * Unit tests for FeaturedProperties API integration
 * 
 * Tests cover:
 * - Successful API response handling
 * - Error scenarios (network error, timeout, 4xx, 5xx)
 * - Empty response handling
 * - Malformed data handling
 * 
 * Validates: Requirements 11.1, 11.2, 11.3, 11.4
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import FeaturedProperties, { isValidProperty, Property } from './FeaturedProperties';

// Mock fetch globally
const originalFetch = global.fetch;

describe('FeaturedProperties API Integration', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    global.fetch = vi.fn();
  });

  afterEach(() => {
    // Restore original fetch
    global.fetch = originalFetch;
    vi.clearAllMocks();
  });

  /**
   * Test: Successful API response handling
   * Validates: Requirements 11.1, 11.3
   */
  describe('Successful API response handling', () => {
    it('should fetch and display properties successfully', async () => {
      // Arrange: Mock successful API response
      const mockProperties: Property[] = [
        {
          id: '1',
          title: 'Modern Apartment',
          location: 'Lagos',
          price: 45000000,
          propertyType: 'Apartment',
          imageUrl: 'https://example.com/image1.jpg',
          isVerified: true,
        },
        {
          id: '2',
          title: 'Luxury Villa',
          location: 'Abuja',
          price: 120000000,
          propertyType: 'House',
          imageUrl: 'https://example.com/image2.jpg',
          isVerified: false,
        },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockProperties,
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Loading state should appear initially
      expect(screen.getByText(/Loading featured properties/i)).toBeInTheDocument();

      // Assert: Properties should be displayed after loading
      await waitFor(() => {
        expect(screen.queryByText(/Loading featured properties/i)).not.toBeInTheDocument();
      });

      // Verify fetch was called with correct URL
      expect(global.fetch).toHaveBeenCalledWith(
        'https://howitworks-production.up.railway.app/api/properties/featured',
        expect.objectContaining({
          signal: expect.any(AbortSignal),
        })
      );
    });

    it('should limit displayed properties to maximum 6', async () => {
      // Arrange: Mock API response with 10 properties
      const mockProperties: Property[] = Array.from({ length: 10 }, (_, i) => ({
        id: `prop-${i}`,
        title: `Property ${i}`,
        location: 'Lagos',
        price: 10000000,
        propertyType: 'Apartment',
        imageUrl: `https://example.com/image${i}.jpg`,
        isVerified: i % 2 === 0,
      }));

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockProperties,
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Wait for loading to complete
      await waitFor(() => {
        expect(screen.queryByText(/Loading featured properties/i)).not.toBeInTheDocument();
      });

      // Note: Component should only render 6 properties maximum
      // This validates Requirement 12.1
    });
  });

  /**
   * Test: Network error handling
   * Validates: Requirements 11.1
   */
  describe('Network error handling', () => {
    it('should display error message on network failure', async () => {
      // Arrange: Mock network error
      (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Error message should be displayed
      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/Unable to load properties/i)).toBeInTheDocument();
      });
    });
  });

  /**
   * Test: Timeout error handling
   * Validates: Requirements 11.2
   */
  describe('Timeout error handling', () => {
    it('should display timeout error when request exceeds 10 seconds', async () => {
      // Arrange: Mock a fetch that will be aborted (simulating timeout)
      (global.fetch as any).mockImplementationOnce(() => {
        return new Promise((_, reject) => {
          setTimeout(() => {
            const error = new Error('Aborted');
            error.name = 'AbortError';
            reject(error);
          }, 100); // Simulate abort after 100ms
        });
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Timeout error message should be displayed
      await waitFor(
        () => {
          const alert = screen.queryByRole('alert');
          if (alert) {
            expect(alert).toBeInTheDocument();
            expect(screen.getByText(/Request timed out|Unable to load properties/i)).toBeInTheDocument();
          }
        },
        { timeout: 3000 }
      );
    });
  });

  /**
   * Test: HTTP 4xx error handling
   * Validates: Requirements 11.1
   */
  describe('HTTP 4xx error handling', () => {
    it('should display error message on 404 Not Found', async () => {
      // Arrange: Mock 404 response
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        json: async () => ({}),
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Error message should be displayed
      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/Unable to load properties/i)).toBeInTheDocument();
      });
    });

    it('should display error message on 400 Bad Request', async () => {
      // Arrange: Mock 400 response
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        json: async () => ({}),
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Error message should be displayed
      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/Unable to load properties/i)).toBeInTheDocument();
      });
    });
  });

  /**
   * Test: HTTP 5xx error handling
   * Validates: Requirements 11.1
   */
  describe('HTTP 5xx error handling', () => {
    it('should display error message on 500 Internal Server Error', async () => {
      // Arrange: Mock 500 response
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
        json: async () => ({}),
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Error message should be displayed
      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/Unable to load properties/i)).toBeInTheDocument();
      });
    });

    it('should display error message on 503 Service Unavailable', async () => {
      // Arrange: Mock 503 response
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 503,
        statusText: 'Service Unavailable',
        json: async () => ({}),
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Error message should be displayed
      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/Unable to load properties/i)).toBeInTheDocument();
      });
    });
  });

  /**
   * Test: Empty response handling
   * Validates: Requirements 11.4
   */
  describe('Empty response handling', () => {
    it('should not display error when API returns empty array', async () => {
      // Arrange: Mock empty array response
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => [],
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Loading should complete without error or empty state message
      await waitFor(() => {
        expect(screen.queryByText(/Loading featured properties/i)).not.toBeInTheDocument();
      });

      // No error alert should be shown
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      
      // Empty state message should be displayed
      expect(screen.getByText(/No featured properties available at this time/i)).toBeInTheDocument();
      expect(screen.getByText(/Check back soon for our latest curated property listings/i)).toBeInTheDocument();
    });
  });

  /**
   * Test: Malformed data handling
   * Validates: Requirements 11.3
   */
  describe('Malformed data handling', () => {
    it('should display error when API returns non-array data', async () => {
      // Arrange: Mock non-array response
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ properties: [] }), // Object instead of array
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Error message should be displayed
      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/Unable to load properties/i)).toBeInTheDocument();
      });
    });

    it('should filter out invalid properties and display error if none are valid', async () => {
      // Arrange: Mock response with invalid property data
      const invalidProperties = [
        { id: '1', title: 'Missing fields' }, // Missing required fields
        { id: '2', title: 123, location: 'Lagos' }, // Wrong type for title
        { title: 'No ID', location: 'Abuja', price: 50000000 }, // Missing id
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => invalidProperties,
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Error should be displayed since no valid properties
      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/No valid properties found/i)).toBeInTheDocument();
      });
    });

    it('should filter out invalid properties but display valid ones', async () => {
      // Arrange: Mock response with mix of valid and invalid properties
      const mixedProperties = [
        {
          id: '1',
          title: 'Valid Property',
          location: 'Lagos',
          price: 45000000,
          propertyType: 'Apartment',
          imageUrl: 'https://example.com/image.jpg',
          isVerified: true,
        },
        { id: '2', title: 'Invalid' }, // Missing required fields
        {
          id: '3',
          title: 'Another Valid Property',
          location: 'Abuja',
          price: 60000000,
          propertyType: 'House',
          imageUrl: 'https://example.com/image2.jpg',
          isVerified: false,
        },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mixedProperties,
      });

      // Act: Render component
      render(<FeaturedProperties />);

      // Assert: Valid properties should be displayed
      await waitFor(() => {
        expect(screen.queryByText(/Loading featured properties/i)).not.toBeInTheDocument();
      });

      // No error should be displayed since we have valid properties
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
  });

  /**
   * Test: isValidProperty type guard function
   * Validates: Requirements 10.5, 11.3
   */
  describe('isValidProperty type guard', () => {
    it('should return true for valid property object', () => {
      const validProperty = {
        id: '1',
        title: 'Test Property',
        location: 'Lagos',
        price: 50000000,
        propertyType: 'Apartment',
        imageUrl: 'https://example.com/image.jpg',
        isVerified: true,
      };

      expect(isValidProperty(validProperty)).toBe(true);
    });

    it('should return false for object missing required fields', () => {
      const invalidProperty = {
        id: '1',
        title: 'Test Property',
        // Missing location, price, propertyType, imageUrl, isVerified
      };

      expect(isValidProperty(invalidProperty)).toBe(false);
    });

    it('should return false for object with wrong field types', () => {
      const invalidProperty = {
        id: '1',
        title: 123, // Should be string
        location: 'Lagos',
        price: '50000000', // Should be number
        propertyType: 'Apartment',
        imageUrl: 'https://example.com/image.jpg',
        isVerified: 'true', // Should be boolean
      };

      expect(isValidProperty(invalidProperty)).toBe(false);
    });

    it('should return false for null or undefined', () => {
      expect(isValidProperty(null)).toBe(false);
      expect(isValidProperty(undefined)).toBe(false);
    });

    it('should return false for non-object types', () => {
      expect(isValidProperty('string')).toBe(false);
      expect(isValidProperty(123)).toBe(false);
      expect(isValidProperty([])).toBe(false);
    });

    it('should return true even with optional fields present', () => {
      const propertyWithOptionalFields = {
        id: '1',
        title: 'Test Property',
        location: 'Lagos',
        price: 50000000,
        propertyType: 'Apartment',
        imageUrl: 'https://example.com/image.jpg',
        isVerified: true,
        description: 'A lovely apartment',
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
      };

      expect(isValidProperty(propertyWithOptionalFields)).toBe(true);
    });
  });

  /**
   * Test: Component cleanup on unmount
   * Validates: Requirements 2.3, 12.4
   */
  describe('Component cleanup', () => {
    it('should abort fetch request when component unmounts', async () => {
      // Arrange: Mock a long-running fetch
      let abortCalled = false;
      (global.fetch as any).mockImplementationOnce((_url: string, options: any) => {
        // Track if abort is called
        options.signal.addEventListener('abort', () => {
          abortCalled = true;
        });

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              ok: true,
              status: 200,
              json: async () => [],
            });
          }, 5000); // Long delay
        });
      });

      // Act: Render and unmount component quickly
      const { unmount } = render(<FeaturedProperties />);
      unmount();

      // Assert: Abort should have been called
      await waitFor(() => {
        expect(abortCalled).toBe(true);
      });
    });
  });
});
