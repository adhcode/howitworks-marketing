# Implementation Plan: Featured Properties Section

## Overview

This implementation plan breaks down the Featured Properties Section into discrete, sequential coding tasks. The component will fetch real property data from the backend API and display featured properties in a responsive grid that matches the existing design system. Each task builds incrementally, with checkpoints to validate functionality. Testing sub-tasks are marked optional with `*` to allow for flexible MVP delivery.

## Tasks

- [x] 1. Set up TypeScript interfaces and types
  - Create `app/components/FeaturedProperties.tsx` file
  - Define `Property` interface with all required fields (id, title, location, price, propertyType, imageUrl, isVerified, and optional fields)
  - Define `PropertyCardProps` interface for card component props
  - Define `LoadingState` type for component state management
  - Define utility type guards for data validation (`isValidProperty`)
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 2. Implement API integration with error handling
  - [x] 2.1 Create API fetch function with timeout and abort controller
    - Implement fetch call to `https://howitworks-production.up.railway.app/api/properties/featured`
    - Add 10-second timeout using `AbortSignal.timeout`
    - Implement abort controller for cleanup on unmount
    - Add response validation for HTTP status codes
    - _Requirements: 2.1, 2.2, 2.3, 11.1, 11.2_
  
  - [x] 2.2 Implement state management for loading, error, and success states
    - Create state hooks for `properties`, `loading`, and `error`
    - Implement loading state transitions (idle → loading → success/error)
    - Add data validation before setting properties state
    - Limit results to maximum 6 properties
    - _Requirements: 2.4, 2.5, 2.6, 11.3, 12.1_
  
  - [x] 2.3 Write unit tests for API integration
    - Test successful API response handling
    - Test error scenarios (network error, timeout, 4xx, 5xx)
    - Test empty response handling
    - Test malformed data handling
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

- [x] 3. Create section header with badge, heading, and CTA
  - Implement section badge with colored dot and "Featured Properties" label
  - Add section heading (h2) with responsive typography (text-3xl → text-4xl → text-5xl)
  - Add descriptive paragraph explaining featured properties
  - Create CTA button linking to `https://app.howitworks.com.ng/`
  - Apply CTA button styling (rounded-full, bg-[#1FD2AF], hover states)
  - Add proper external link attributes (target="_blank", rel="noopener noreferrer")
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 9.3_

- [x] 4. Implement loading state with skeleton loaders
  - Create skeleton loader components matching property card structure
  - Display 6 skeleton cards in responsive grid during loading
  - Use pulse animation for skeleton elements
  - Match card dimensions and spacing with actual cards
  - Add ARIA live region for screen reader announcements
  - _Requirements: 2.4, 9.1, 9.6, 11.6_

- [x] 5. Implement error and empty states
  - [x] 5.1 Create error state component
    - Display user-friendly error message in styled container
    - Maintain section vertical spacing to prevent layout shift
    - Use ARIA alert role for screen reader announcements
    - Match section styling (rounded-[1.75rem], border, bg-white/82)
    - _Requirements: 2.5, 11.1, 11.2, 11.5, 11.6_
  
  - [x] 5.2 Create empty state component
    - Display "No featured properties available" message
    - Maintain section vertical spacing
    - Use same visual styling as error state
    - _Requirements: 2.6, 11.4, 11.5_

- [x] 6. Checkpoint - Verify state management and error handling
  - Ensure all tests pass, ask the user if questions arise.

- [~] 7. Implement PropertyCard component structure
  - [x] 7.1 Create PropertyCard child component with props interface
    - Accept property object and index as props
    - Set up article element wrapper with semantic HTML
    - Create card container with design system styling
    - Apply border (border-white/75) and background (bg-white/82)
    - Apply border-radius (rounded-[1.75rem])
    - _Requirements: 4.7, 9.1, 9.2, 5.4, 5.5_
  
  - [x] 7.2 Implement property image with Next.js Image component
    - Create image container with relative positioning and aspect-[1.15]
    - Use Next.js Image component with fill layout
    - Configure sizes attribute: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    - Set priority={index < 3} for first 3 images
    - Apply object-cover for aspect ratio maintenance
    - Add fallback handling for missing/failed images
    - _Requirements: 4.1, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 12.2_
  
  - [x] 7.3 Add verification badge for verified properties
    - Conditionally render badge when isVerified is true
    - Position badge absolutely (top-4, left-4)
    - Style with rounded-full, bg-white/92, appropriate padding
    - Use uppercase tracking and #1FD2AF color
    - _Requirements: 4.6, 5.2_
  
  - [ ] 7.4 Write unit tests for PropertyCard component
    - Test property card rendering with complete data
    - Test missing/null field handling
    - Test verification badge conditional rendering
    - Test image alt text generation
    - _Requirements: 4.7, 7.4, 9.5_

- [x] 8. Implement property card content display
  - [x] 8.1 Add property title with typography styling
    - Display property title using h3 heading
    - Apply Urbanist font family and font-semibold (600)
    - Use responsive font sizing (text-xl → text-2xl)
    - Apply primary color (#1A2A52)
    - Handle missing title with fallback text
    - _Requirements: 4.2, 4.7, 5.6, 5.7_
  
  - [x] 8.2 Add property location with icon
    - Display location with map pin icon
    - Apply Lato font family with opacity-70
    - Use responsive font sizing (text-sm → text-base)
    - Handle missing location with fallback text
    - _Requirements: 4.3, 4.7, 5.7_
  
  - [x] 8.3 Implement price formatting and display
    - Create formatPrice utility function using Intl.NumberFormat
    - Format price in Nigerian Naira (NGN) with no decimal places
    - Display formatted price with appropriate styling
    - Apply font-semibold and primary color
    - Handle zero or missing price gracefully
    - _Requirements: 4.4, 4.7_
  
  - [x] 8.4 Add property type badge
    - Display property type (apartment, house, land, etc.)
    - Style as inline badge with background and padding
    - Use uppercase and tracking for label styling
    - Use accent color (#FFB300) or secondary color for badge
    - _Requirements: 4.5, 5.2_

- [x] 9. Implement responsive grid layout
  - Create grid container with responsive columns
  - Apply single-column layout on mobile (grid-cols-1)
  - Apply two-column layout on tablet (sm:grid-cols-2)
  - Apply three-column layout on desktop (lg:grid-cols-3)
  - Set gap spacing: gap-5 on mobile, gap-6 on desktop
  - Wrap grid in max-w-6xl container with responsive padding (px-6 → px-8 → px-12)
  - Apply section padding (py-16 → py-20 → py-24)
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.8, 5.9_

- [x] 10. Implement animations and interactions
  - [x] 10.1 Add fade-in-up animation to section header
    - Apply animate-fade-in-up class to header container
    - Verify animation timing matches design system (1s ease-out)
    - _Requirements: 8.1, 8.5_
  
  - [x] 10.2 Add staggered scale-in animations to property cards
    - Apply animate-scale-in class to each PropertyCard
    - Calculate animation delay based on card index (200ms intervals)
    - Apply delays: 0ms, 200ms, 400ms, 600ms, 800ms, 800ms for cards 0-5
    - Use animation-delay classes from globals.css
    - _Requirements: 8.2, 8.5_
  
  - [x] 10.3 Implement hover effects on property cards
    - Add transform translateY(-8px) on hover
    - Add box-shadow transition on hover
    - Use transition duration-300 with cubic-bezier easing
    - _Requirements: 8.3, 8.4_
  
  - [x] 10.4 Add CTA button hover transitions
    - Implement background color transition (hover:bg-[#1AB89A])
    - Use transition-all duration-300
    - _Requirements: 6.7, 8.4_

- [x] 11. Checkpoint - Verify visual design and animations
  - Ensure all tests pass, ask the user if questions arise.

- [~] 12. Implement accessibility features
  - [x] 12.1 Add semantic HTML and ARIA attributes
    - Wrap component in section element with aria-labelledby
    - Use article elements for property cards with role="listitem"
    - Wrap property grid with role="list"
    - Add id to section heading for aria-labelledby reference
    - _Requirements: 9.1, 9.2, 9.4_
  
  - [x] 12.2 Implement descriptive alt text for images
    - Generate alt text format: "{title} - {propertyType} in {location}"
    - Include property details in alt text for context
    - _Requirements: 7.4, 9.5_
  
  - [x] 12.3 Add ARIA labels and live regions
    - Add aria-label to CTA button for clarity
    - Add role="status" with aria-live="polite" to loading state
    - Add role="alert" with aria-live="assertive" to error state
    - Include sr-only text for screen reader context
    - _Requirements: 9.3, 9.6_
  
  - [x] 12.4 Implement keyboard navigation and focus styles
    - Ensure tab order flows naturally through cards and CTA
    - Add focus-visible outline styles (2px solid #1FD2AF, 4px offset)
    - Test keyboard navigation with Tab and Enter keys
    - _Requirements: 9.6_
  
  - [ ] 12.5 Run automated accessibility audit
    - Run axe-core or similar accessibility testing tool
    - Verify no violations found
    - Check color contrast ratios meet WCAG AA standards
    - Verify heading hierarchy is correct (h2 → h3)
    - _Requirements: 9.4, 9.5_

- [x] 13. Integrate component into page layout
  - Import FeaturedProperties component in `app/page.tsx`
  - Position component immediately after HeroSection
  - Verify no layout conflicts with adjacent sections
  - Test vertical spacing between sections
  - Ensure component renders without hydration errors
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 14. Test responsive layouts across breakpoints
  - [x] 14.1 Test mobile layout (375px, 640px viewports)
    - Verify single-column grid displays correctly
    - Check image aspect ratios and card spacing
    - Test loading, error, and empty states on mobile
    - Verify CTA button is appropriately sized and positioned
    - _Requirements: 3.2, 3.5_
  
  - [x] 14.2 Test tablet layout (768px, 1024px viewports)
    - Verify two-column grid displays correctly
    - Check card alignment and gap spacing
    - Test all component states at tablet size
    - _Requirements: 3.3, 3.5_
  
  - [x] 14.3 Test desktop layout (1280px, 1536px viewports)
    - Verify three-column grid displays correctly
    - Check max-width container constrains content appropriately
    - Test hover effects on cards and CTA button
    - Verify animations perform smoothly
    - _Requirements: 3.4, 3.5, 5.9_

- [x] 15. Optimize performance and verify metrics
  - [x] 15.1 Verify image optimization settings
    - Check Next.js Image component configuration
    - Verify sizes attribute generates correct srcset
    - Test priority loading for first 3 images
    - Verify lazy loading for remaining images
    - Check fallback image handling
    - _Requirements: 7.1, 7.2, 7.5, 12.2_
  
  - [x] 15.2 Test API request performance
    - Verify 10-second timeout works correctly
    - Test abort controller cancels request on unmount
    - Check that only 6 properties are fetched/displayed
    - Verify no unnecessary re-renders occur
    - _Requirements: 12.1, 12.3, 12.4, 12.5_
  
  - [x] 15.3 Measure performance metrics
    - Measure Largest Contentful Paint (LCP) - target < 2.5s
    - Measure Cumulative Layout Shift (CLS) - target < 0.1
    - Check bundle size impact of new component
    - Verify animation performance (no janky animations)
    - _Requirements: 12.1, 12.2, 12.3, 12.5_

- [x] 16. Final checkpoint - Complete testing and verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- The design uses TypeScript with React/Next.js, not pseudocode
- Component uses client-side data fetching (useEffect + fetch API)
- All color values, typography, and spacing follow the existing design system from globals.css
- Property cards use staggered animations with delays: 0ms, 200ms, 400ms, 600ms, 800ms
- Maximum 6 properties will be displayed in a 3×2 grid on desktop
- API endpoint: `https://howitworks-production.up.railway.app/api/properties/featured`
- CTA button links to: `https://app.howitworks.com.ng/`
- Checkpoints are included at reasonable breaks to validate progress incrementally
