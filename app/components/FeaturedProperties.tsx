"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * API endpoint for featured properties
 */
const API_URL = "https://howitworks-production.up.railway.app/api/properties/featured";

/**
 * Timeout duration for API requests (10 seconds)
 */
const API_TIMEOUT = 10000;

/**
 * Property interface representing the property data structure from API
 * Validates: Requirements 10.1, 10.2, 10.3
 */
export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  propertyType: string;
  imageUrl: string;
  isVerified: boolean;
  // Optional fields
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
}

/**
 * PropertyCardProps interface for property card component props
 * Validates: Requirements 10.4
 */
export interface PropertyCardProps {
  property: Property;
  index: number; // For staggered animations
}

/**
 * LoadingState type for component state management
 * Validates: Requirements 10.5
 */
export type LoadingState = "idle" | "loading" | "success" | "error";

/**
 * Type guard to validate property data structure
 * Validates: Requirements 10.5, 11.3
 */
export const isValidProperty = (prop: unknown): prop is Property => {
  return (
    typeof prop === "object" &&
    prop !== null &&
    typeof (prop as Property).id === "string" &&
    typeof (prop as Property).title === "string" &&
    typeof (prop as Property).location === "string" &&
    typeof (prop as Property).price === "number" &&
    typeof (prop as Property).propertyType === "string" &&
    typeof (prop as Property).imageUrl === "string" &&
    typeof (prop as Property).isVerified === "boolean"
  );
};

/**
 * FeaturedProperties Component
 * 
 * Displays featured properties from the backend API in a responsive grid layout.
 * This component is positioned after the Hero Section on the marketing website.
 * 
 * Features:
 * - Fetches real property data from NestJS backend API
 * - Displays 3-6 featured properties in a responsive grid
 * - Shows loading, error, and empty states
 * - Matches existing design system patterns
 * - Implements smooth animations and interactions
 * 
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 11.1, 11.2, 11.3, 12.1
 */
export default function FeaturedProperties() {
  // State management for properties, loading, and error
  // Validates: Requirements 2.4, 2.5, 2.6
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch featured properties from API with timeout and abort controller
   * 
   * This effect runs once on component mount and handles:
   * - 10-second timeout using manual timeout with AbortController
   * - Abort controller for cleanup on unmount
   * - HTTP status code validation
   * - Network error handling
   * - Timeout error handling
   * - Data validation using isValidProperty type guard
   * - Limiting results to maximum 6 properties
   * 
   * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 11.1, 11.2, 11.3, 12.1
   */
  useEffect(() => {
    // Create abort controller for manual cleanup on unmount
    const abortController = new AbortController();
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let isTimeoutError = false;

    /**
     * Async function to fetch properties from API
     */
    const fetchProperties = async () => {
      try {
        // Set loading state to true (Requirements 2.4)
        setLoading(true);
        setError(null);

        // Set up timeout that will abort the request after 10 seconds
        timeoutId = setTimeout(() => {
          isTimeoutError = true;
          abortController.abort();
        }, API_TIMEOUT);

        // Fetch with abort controller signal
        const response = await fetch(API_URL, {
          signal: abortController.signal,
          headers: {
            'Accept': 'application/json',
          },
        });

        // Clear timeout since request completed successfully
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }

        // Validate HTTP status codes (Requirements 2.1, 11.1)
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        // Parse JSON response
        const data = await response.json();

        // Validate that data is an array
        if (!Array.isArray(data)) {
          throw new Error('Invalid API response: expected an array');
        }

        // Validate and filter properties (Requirements 11.3)
        const validProperties = data.filter((item) => isValidProperty(item));

        // Check if we have valid properties after filtering
        if (validProperties.length === 0 && data.length > 0) {
          // Data was returned but no valid properties
          setError('No valid properties found');
          setProperties([]);
          setLoading(false);
          return;
        }

        // Limit to maximum 6 properties (Requirements 12.1)
        const limitedProperties = validProperties.slice(0, 6);

        // Set properties state (Requirements 2.6)
        setProperties(limitedProperties);
        setLoading(false);

      } catch (error) {
        // Clear timeout if error occurred
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }

        // Handle different error types (Requirements 11.1, 11.2)
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            // Check if this was a timeout or manual abort (component unmounted)
            if (isTimeoutError) {
              // Timeout error (Requirements 11.2)
              setError('Request timed out. Please check your connection.');
              setLoading(false);
            }
            // If not timeout, it was a manual abort (unmount) - do nothing
          } else {
            // Network error or HTTP error (Requirements 11.1)
            setError('Unable to load properties. Please try again later.');
            setLoading(false);
          }
        } else {
          // Unknown error type
          setError('An unexpected error occurred. Please try again later.');
          setLoading(false);
        }
      }
    };

    // Execute fetch on mount
    fetchProperties();

    // Cleanup function: abort request and clear timeout if component unmounts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      abortController.abort();
    };
  }, []);

  return (
    <section 
      className="relative overflow-hidden bg-[#F7F8FA] py-16 sm:py-20 lg:py-24"
      aria-labelledby="featured-properties-heading"
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Section Header - Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 8.1, 9.3 */}
        <div className="animate-fade-in-up mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          {/* Section Badge - Validates: Requirements 6.1, 5.2, 5.10 */}
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#1A2A52]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1A2A52]/70">
            <span className="h-2 w-2 rounded-full bg-[#1FD2AF]" />
            Featured Properties
          </div>

          {/* Section Heading - Validates: Requirements 6.2, 5.6, 9.4 */}
          <h2 
            id="featured-properties-heading"
            className="text-3xl font-semibold leading-tight text-[#1A2A52] sm:text-4xl lg:text-5xl"
          >
            Discover Your Dream Property
          </h2>

          {/* Description Paragraph - Validates: Requirements 6.3, 5.7 */}
          <p className="mt-4 text-base leading-relaxed text-[#3A3A3C] sm:text-lg">
            Browse our carefully curated selection of verified properties. From modern apartments to luxury homes, 
            find the perfect space that matches your lifestyle and budget.
          </p>

          {/* CTA Button - Validates: Requirements 6.4, 6.5, 6.6, 6.7, 6.8, 9.3 */}
          <div className="mt-6 lg:mt-8">
            <a
              href="https://app.howitworks.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#1FD2AF] px-8 py-4 text-center font-medium text-white transition-all duration-300 hover:bg-[#1AB89A]"
              aria-label="View all available properties on our property listing platform"
            >
              View All Properties
            </a>
          </div>
        </div>

        {/* Loading State - Validates: Requirements 2.4, 9.1, 9.6, 11.6 */}
        {loading && (
          <div
            role="status"
            aria-live="polite"
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {/* Screen reader announcement */}
            <span className="sr-only">Loading featured properties...</span>
            
            {/* Render 6 skeleton cards */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="animate-pulse rounded-[1.75rem] border border-white/75 bg-white/82 p-6 sm:p-7 lg:p-8"
                aria-hidden="true"
              >
                {/* Skeleton image */}
                <div className="aspect-[1.15] w-full rounded-2xl bg-gray-200" />
                
                {/* Skeleton content */}
                <div className="mt-4 space-y-3">
                  {/* Skeleton title */}
                  <div className="h-7 w-3/4 rounded-lg bg-gray-200" />
                  
                  {/* Skeleton location */}
                  <div className="h-5 w-1/2 rounded-lg bg-gray-200" />
                  
                  {/* Skeleton price and type container */}
                  <div className="flex items-center justify-between pt-2">
                    {/* Skeleton price */}
                    <div className="h-6 w-1/3 rounded-lg bg-gray-200" />
                    
                    {/* Skeleton property type badge */}
                    <div className="h-6 w-20 rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State - Validates: Requirements 2.5, 11.1, 11.2, 11.5, 11.6 */}
        {error && !loading && (
          <div
            role="alert"
            aria-live="assertive"
            className="mx-auto max-w-2xl rounded-[1.75rem] border border-white/75 bg-white/82 p-8 text-center sm:p-10 lg:p-12"
          >
            {/* Error Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-8 w-8 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>

            {/* Error Message */}
            <p className="text-lg font-medium text-[#1A2A52] sm:text-xl">
              {error}
            </p>

            {/* Additional Help Text */}
            <p className="mt-2 text-sm text-[#3A3A3C]/70 sm:text-base">
              Please try refreshing the page or come back later.
            </p>
          </div>
        )}

        {/* Empty State - Validates: Requirements 2.6, 11.4, 11.5 */}
        {properties.length === 0 && !loading && !error && (
          <div
            className="mx-auto max-w-2xl rounded-[1.75rem] border border-white/75 bg-white/82 p-8 text-center sm:p-10 lg:p-12"
          >
            {/* Empty State Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4F5F7]">
              <svg
                className="h-8 w-8 text-[#3A3A3C]/50"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>

            {/* Empty State Message */}
            <p className="text-lg font-medium text-[#1A2A52] sm:text-xl">
              No featured properties available at this time
            </p>

            {/* Additional Help Text */}
            <p className="mt-2 text-sm text-[#3A3A3C]/70 sm:text-base">
              Check back soon for our latest curated property listings.
            </p>
          </div>
        )}

        {/* Success State - Property Grid - Validates: Requirements 2.6, 3.1, 3.2, 3.3, 3.4, 3.5, 9.2, 9.4 */}
        {properties.length > 0 && !loading && !error && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" role="list">
            {properties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Format price in Nigerian Naira currency format
 * 
 * Validates: Requirements 4.4
 * 
 * @param price - Price value to format
 * @returns Formatted price string
 */
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * PropertyCard Component
 * 
 * Displays an individual property card with image, title, location, price, and type.
 * Uses semantic HTML with article element for accessibility.
 * Implements staggered scale-in animations and hover effects.
 * 
 * Validates: Requirements 4.7, 8.2, 8.3, 8.4, 9.1, 9.2, 5.4, 5.5
 * 
 * @param property - Property object containing all property data
 * @param index - Card index for staggered animations
 */
function PropertyCard({ property, index }: PropertyCardProps) {
  // State to track image loading errors
  // Validates: Requirements 7.5
  const [imageError, setImageError] = useState<boolean>(false);

  // Handle missing or null fields with fallback values
  // Validates: Requirements 4.7
  const title = property.title || 'Untitled Property';
  const location = property.location || 'Location not specified';
  const price = property.price || 0;
  const propertyType = property.propertyType || 'Property';
  const imageUrl = property.imageUrl || '';

  // Calculate animation delay based on index (200ms intervals)
  // Capped at 800ms for cards beyond index 3
  // Validates: Requirements 8.2, 8.5
  const getAnimationDelayClass = () => {
    if (index === 1) return 'animation-delay-200';
    if (index === 2) return 'animation-delay-400';
    if (index === 3) return 'animation-delay-600';
    if (index >= 4) return 'animation-delay-800';
    return ''; // No delay for first card (index 0)
  };

  return (
    <article
      className={`animate-scale-in ${getAnimationDelayClass()} rounded-[1.75rem] border border-white/75 bg-white/82 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1FD2AF] sm:p-7 lg:p-8`}
      role="listitem"
    >
      {/* Property Image - Validates: Requirements 4.1, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 12.2 */}
      <div className="relative aspect-[1.15] w-full overflow-hidden rounded-2xl bg-gray-100">
        {/* Display image if URL exists and no error occurred, otherwise show fallback */}
        {imageUrl && !imageError ? (
          <Image
            src={imageUrl}
            alt={`${title} - ${propertyType} in ${location}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Fallback UI for missing or failed images - Validates: Requirements 7.5 */
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Home/Property Icon */}
            <svg
              className="h-16 w-16 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            {/* Fallback text */}
            <span className="mt-2 text-xs font-medium text-gray-500">
              Image unavailable
            </span>
          </div>
        )}
        
        {/* Verification Badge - Validates: Requirements 4.6, 5.2 */}
        {property.isVerified && (
          <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1FD2AF]">
            Verified
          </div>
        )}
      </div>

      {/* Property Content - Validates: Requirements 4.2, 4.3, 4.4, 4.5 */}
      <div className="mt-4 space-y-3">
        {/* Property Title - Validates: Requirements 4.2, 4.7, 5.6, 5.7 */}
        <h3 className="font-urbanist text-xl font-semibold leading-tight text-[#1A2A52] sm:text-2xl">
          {title}
        </h3>

        {/* Property Location - Validates: Requirements 4.3, 4.7, 5.7 */}
        <div className="flex items-center gap-2 font-lato text-sm text-[#3A3A3C]/70 sm:text-base">
          {/* Map Pin Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span>{location}</span>
        </div>

        {/* Price and Property Type Container */}
        <div className="flex items-center justify-between pt-2">
          {/* Property Price - Validates: Requirements 4.4, 4.7 */}
          <div className="font-urbanist text-lg font-semibold text-[#1A2A52] sm:text-xl">
            {formatPrice(price)}
          </div>

          {/* Property Type Badge - Validates: Requirements 4.5, 5.2 */}
          <div className="inline-flex items-center rounded-full bg-[#FFB300]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FFB300]">
            {propertyType}
          </div>
        </div>
      </div>
    </article>
  );
}
