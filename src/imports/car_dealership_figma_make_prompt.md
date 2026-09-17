# Figma Make Prompt — Complete Car Dealership Website

## PROJECT

**Car Dealership Website — Complete Responsive Website Expansion**

Act as a **Senior Product Designer, UX Designer, UI Designer, and Frontend Engineer**.

Your task is to first **REVIEW and ANALYZE** the existing homepage design in the reference frame:

`00-Home_v3.4`

Then use that homepage as the **SINGLE SOURCE OF TRUTH** for the entire website design system and create all remaining inner pages.

### IMPORTANT

- Do **not** redesign the existing homepage from scratch.
- Do **not** introduce a new visual style.
- Do **not** create an unrelated design system.
- The existing homepage has already established the brand's visual language.
- The goal is to expand the existing homepage into a complete, polished, responsive, and interactive car dealership website while maintaining visual consistency across every page.

---

## 1. FIRST: AUDIT THE EXISTING HOMEPAGE

Before creating any new page, carefully inspect the existing `00-Home_v3.4` frame and identify its existing design rules.

Treat these as the **master design system**.

Analyze and replicate exactly:

- Overall page grid
- Content max-width
- Horizontal page margins
- Section spacing
- Component spacing
- Card spacing
- Internal card padding
- Grid gaps
- Header height
- Navigation spacing
- Footer spacing
- Button dimensions
- Button radius
- Input height
- Input radius
- Card radius
- Border treatment
- Shadow treatment
- Typography hierarchy
- Heading sizes
- Body sizes
- Label sizes
- Font weights
- Line heights
- Letter spacing
- Primary brand color
- Secondary colors
- Background colors
- Surface colors
- Border colors
- Icon treatment
- Image treatment
- Corner-radius language
- Decorative graphical elements
- Section compositions
- CTA treatment
- Tabs
- Filters
- Form fields
- Cards
- Badges
- Navigation states
- Hover states
- Active states
- Selected states

Do not estimate a new design system if an existing component or style can be reused.

Reuse existing components wherever possible.

If an equivalent component already exists in the homepage, extend it instead of creating a visually different version.

---

## 2. DESIGN PRINCIPLES

The entire website should feel like **ONE cohesive product**.

Follow these principles:

1. Homepage is the visual source of truth.
2. Reuse existing components.
3. Maintain exact spacing and alignment logic.
4. Maintain the same typography hierarchy.
5. Maintain the same visual density.
6. Maintain the same border-radius language.
7. Maintain the same button hierarchy.
8. Maintain the same image treatment.
9. Maintain the same brand color usage.
10. Maintain the same decorative visual language.
11. Do not unnecessarily introduce new colors.
12. Do not introduce random gradients.
13. Do not introduce unrelated shadows.
14. Do not introduce different card styles.
15. Do not create inconsistent page headers.
16. Maintain strong visual hierarchy and whitespace.
17. Keep the experience premium, modern, trustworthy, and automotive-focused.

The final result should look as if every page was designed by the same senior product design team.

---

## 3. RESPONSIVE BREAKPOINTS

Design and implement all pages for **THREE breakpoints**:

### Desktop
`1440px`

### Tablet
`768px`

### Mobile
`390px`

Do not simply scale the desktop design down.

Create intentional responsive layouts.

### Desktop

- Full navigation
- Multi-column layouts
- Large content grids
- Full-size cards
- Full footer
- Desktop forms
- Side-by-side content where appropriate

### Tablet

- Adapt grid columns
- Reduce spacing where required
- Preserve hierarchy
- Reflow cards intelligently
- Adjust navigation appropriately
- Maintain comfortable touch targets

### Mobile

- Mobile navigation / hamburger menu
- Single-column layouts where appropriate
- Horizontally scrollable car categories where useful
- Stack forms
- Stack CTAs where required
- Reduce typography according to the existing responsive hierarchy
- Maintain consistent page padding
- Maintain readable card layouts
- Ensure buttons and inputs are touch-friendly
- Prevent horizontal overflow

Use the same spacing system and visual language across all three breakpoints.

---

## 4. GLOBAL WEBSITE STRUCTURE

Create a complete connected website consisting of:

1. Home
2. Buy / Cars Listing
3. Search Results
4. Car Detail
5. Sell Your Car
6. Offers
7. About Us
8. Finance
9. Blog / Car Tips & Guides
10. Blog Detail
11. Contact Us
12. Terms & Conditions
13. Privacy Policy

Also include all relevant states required for a realistic website experience.

---

## 5. GLOBAL HEADER

Use the existing homepage header as the master reference.

Keep:

- Same logo placement
- Same navigation hierarchy
- Same typography
- Same spacing
- Same icons
- Same CTA styling
- Same header height
- Same visual treatment

Navigation should include:

- Buy
- Sell
- Finance
- Offers
- About Us

Retain existing utility actions from the homepage.

Make every navigation item clickable.

Active navigation state should clearly indicate the current page while remaining visually consistent with the homepage.

### Mobile

- Convert navigation to a mobile menu.
- Preserve the same branding.
- Use the same CTA hierarchy.
- Ensure the menu is fully interactive.
- Menu items should navigate to their respective pages.

---

## 6. GLOBAL FOOTER

Use the existing homepage footer as the master reference.

Maintain:

- Same background
- Same logo treatment
- Same typography
- Same column structure
- Same spacing
- Same social icons
- Same legal links
- Same visual hierarchy

Footer links must be functional.

Include navigation for:

### Explore

- Buy
- Sell
- Finance
- Offers
- About Us

### Support

- Book a Visit
- Car Tips & Guides
- Contact Us
- FAQ
- Terms & Conditions
- Privacy Policy

### Social

Use appropriate interactive placeholders if real URLs are unavailable.

All footer links should navigate to the corresponding pages.

---

## 7. BUY / CAR LISTING PAGE

Create a professional car inventory/listing experience based on the existing homepage's car cards.

### Page structure

- Global header
- Page heading
- Supporting description
- Search / filter area
- Car inventory
- Sorting controls
- Results count
- Pagination or Load More
- Footer

### Filters

Include examples such as:

- Make
- Model
- Price
- Year
- Mileage
- Body Type
- Fuel Type
- Transmission
- Location

Use the homepage's existing form controls and car-card language.

### Car cards

Each card should include:

- Car image
- Brand
- Model
- Year
- Mileage
- Transmission
- Price
- Favorite icon
- View/details CTA

### Interactions

- Filter controls should visibly update the result state.
- Search should update the displayed results.
- Sort should change the visible ordering/state.
- Favorite icons should toggle selected/unselected state.
- Clicking a car card should navigate to the Car Detail page.
- Clear Filters should reset filters.
- Pagination / Load More should show another result state.

Create realistic sample inventory data.

---

## 8. SEARCH RESULTS PAGE

Create a dedicated Search Results experience.

Include:

- Search input
- Search query
- Result count
- Filters
- Sort
- Car result cards
- Empty state
- No-results state

Example:

`Search results for Toyota`

Provide realistic interactions:

- Search
- Filter
- Sort
- Clear search
- Open vehicle detail

Create an appropriate empty-state design using the existing visual language.

---

## 9. CAR DETAIL PAGE

Create a premium vehicle detail page.

### Structure

- Breadcrumb
- Large vehicle image gallery
- Vehicle title
- Price
- Key specifications
- Finance CTA
- Contact / enquiry CTA
- Book a visit CTA
- Vehicle overview
- Features
- Technical specifications
- Inspection information
- Warranty information
- Similar vehicles
- Footer

### Interactions

Include:

- Image gallery interaction
- Thumbnail selection
- Favorite button
- CTA interactions
- Finance CTA
- Contact CTA
- Book Visit CTA

Maintain the exact visual language of the homepage's vehicle cards.

---

## 10. SELL YOUR CAR PAGE

Expand the existing homepage's **"SELL YOUR CAR IN 3 STEPS"** experience into a dedicated page.

Use a clear step-based process.

### Example

**Step 1:** Enter vehicle details

**Step 2:** Tell us about your car

**Step 3:** Choose inspection / appointment

**Step 4:** Get an estimated value

**Step 5:** Complete the sale

### Fields

Include:

- Make
- Model
- Year
- Mileage
- Condition
- Registration information
- Contact details

Use the same form styling as the homepage.

### Interactive states

Create:

- Default
- Focus
- Selected
- Validation error
- Completed
- Success

Include a clear success state after submission.

---

## 11. OFFERS PAGE

Create a dedicated offers/promotions page.

Include:

- Page heading
- Featured offer
- Offer cards
- Vehicle-related promotions
- Finance offers
- Limited-time offers

Each offer card should include:

- Image
- Offer title
- Short description
- Validity
- CTA

Create a consistent card system using existing homepage components.

Offer cards should be clickable.

---

## 12. ABOUT US PAGE

Create an About Us page using the homepage design language.

### Hero

**Good Cars**

**Dubai's trusted pre-owned cars**

### Trust / Value Proposition

**Inspect**  
145-point technical inspection by technicians.

**Warranty**  
Warranty coverage for added peace of mind.

**Support**  
360 support throughout your car-buying journey.

**Certified**  
Carefully checked and verified vehicles.

Include:

- Company story
- Mission / values
- Why choose us
- Inspection process
- Customer trust
- CTA to Browse Cars

Use strong automotive imagery and existing decorative visual elements from the homepage where appropriate.

---

## 13. FINANCE PAGE

Create a dedicated automotive financing experience.

### Hero

**Finance Your Car**

Include supporting content explaining the financing process.

### Sections

- Finance benefits
- How financing works
- Eligibility
- Required documents
- Finance calculator
- Frequently asked questions
- CTA

### Finance Calculator

Include:

- Vehicle price
- Down payment
- Loan duration
- Interest rate

Show:

- Estimated monthly payment
- Total finance amount

Create interactive calculator states.

Include CTA:

**Apply for Finance**

Create a simple finance enquiry form.

---

## 14. BLOG / CAR TIPS & GUIDES PAGE

Use the homepage's **"CAR TIPS & GUIDES"** section as the visual reference.

Create:

- Page heading
- Featured article
- Article grid
- Categories
- Search
- Article cards

### Categories

Examples:

- Buying Guide
- Selling Guide
- Finance
- Car Maintenance
- Car Reviews
- Ownership Tips

### Article cards

Include:

- Image
- Category
- Title
- Short description
- Read time / date
- CTA

Cards should navigate to Blog Detail.

---

## 15. BLOG DETAIL PAGE

Create a complete article detail page.

Include:

- Breadcrumb
- Category
- Article title
- Supporting description
- Author / date
- Hero image
- Article content
- Related articles
- CTA to browse cars
- Footer

Maintain comfortable reading width while preserving the existing page grid.

---

## 16. CONTACT US PAGE

Create a dedicated Contact page.

Include:

- Heading
- Supporting text
- Contact information
- Location
- Phone
- Email
- Business hours
- Contact form
- Map/location section
- FAQ shortcut

### Form fields

- Name
- Email
- Phone
- Subject
- Message

Include validation and success state.

---

## 17. LEGAL PAGES

Create:

- Terms & Conditions
- Privacy Policy

Use a clean content-focused layout while maintaining the same:

- Header
- Footer
- Typography
- Grid
- Page margins
- Spacing
- Colors

Create realistic legal content placeholders.

Use readable content width and appropriate paragraph spacing.

---

## 18. INTERACTION & PROTOTYPE FUNCTIONALITY

The final Figma Make website must behave like a **connected website prototype**.

Every major CTA should work.

### Header

- Buy → Buy page
- Sell → Sell page
- Finance → Finance page
- Offers → Offers page
- About Us → About page
- Logo → Home

### Cards

- Vehicle card → Vehicle Detail
- Blog card → Blog Detail
- Offer card → Offer/detail state

### Search

- Search → Search Results
- Search result → Vehicle Detail

### Filters

- Select filter
- Apply filter
- Clear filter
- Sort results

### Vehicle Detail

- Image gallery
- Favorite
- Finance CTA
- Contact CTA
- Book Visit CTA

### Forms

- Field interaction
- Validation
- Error state
- Success state

### Sell

- Multi-step progression
- Back
- Continue
- Validation
- Completion / success state

### Finance

- Calculator interaction
- Apply for Finance
- Form submission state

### Mobile

- Hamburger menu
- Open menu
- Close menu
- Navigation

### Footer

All navigation links must be functional.

---

## 19. COMPONENT SYSTEM

Before creating pages, identify reusable components from the homepage.

Create / reuse components for:

- Header
- Navigation
- Mobile navigation
- Footer
- Buttons
- Secondary buttons
- Inputs
- Selects
- Search fields
- Filter controls
- Vehicle cards
- Featured vehicle cards
- Brand cards
- Offer cards
- Blog cards
- Review cards
- Tabs
- Badges
- Breadcrumbs
- Pagination
- Form sections
- Section headings
- CTA sections
- Modal / overlay
- Toast / success state

Use consistent component variants.

Do not create duplicate components that visually perform the same function.

---

## 20. DESIGN CONSISTENCY CHECK

Before completing the work, compare every new page against `00-Home_v3.4`.

Verify:

- [ ] Same grid
- [ ] Same max-width
- [ ] Same page padding
- [ ] Same section spacing
- [ ] Same card spacing
- [ ] Same typography
- [ ] Same heading hierarchy
- [ ] Same button styling
- [ ] Same form styling
- [ ] Same border radius
- [ ] Same shadows
- [ ] Same icon style
- [ ] Same colors
- [ ] Same image treatment
- [ ] Same visual density
- [ ] Same decorative language
- [ ] Same header
- [ ] Same footer

If any page looks visually unrelated to the homepage, revise it.

---

## 21. RESPONSIVE QA

Check every page at:

- **Desktop — 1440px**
- **Tablet — 768px**
- **Mobile — 390px**

Verify:

- No horizontal overflow
- No broken layouts
- No overlapping components
- No clipped text
- No distorted images
- No excessive whitespace
- No cramped content
- Buttons remain accessible
- Forms remain usable
- Cards adapt correctly
- Navigation works
- Footer adapts correctly
- Typography remains readable
- Touch targets are sufficiently large

---

## 22. FINAL QUALITY BAR

The final result should feel like a **production-ready premium automotive dealership website**.

Prioritize:

- Strong UX
- Clear hierarchy
- High usability
- Consistent spacing
- Consistent typography
- Premium automotive presentation
- Trust
- Conversion
- Responsive behavior
- Accessibility
- Realistic content
- Functional navigation
- Reusable components

### IMPORTANT FINAL INSTRUCTION

Do not change the established design language of `00-Home_v3.4`.

Use the homepage as the master reference and extend its exact visual system across the entire website.

The result should look like:

**ONE WEBSITE**  
**ONE DESIGN SYSTEM**  
**ONE COMPONENT LANGUAGE**  
**THREE RESPONSIVE BREAKPOINTS**  
**FULLY CONNECTED USER FLOWS**
