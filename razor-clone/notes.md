# all routes are coming from [utils/routes.ts] 

# all types of query are included in [framework/types.ts]

# all api endpoints are in [framework/basic-rest/utils/api-endpoints]

# axios is used in a file named [http]

# some seo information is placed in [seo/default-seo]

# most of the hard coded messages or text are in [public/locale/common.json]

# The Initial page is coming from [components/layout.tsx]

# heroBanner={heroBanner} in [index.tsx] [heroSliderBlock.tsx] is coming from [framework/basic-rest/static/banner.ts]

# Every PRODUCT calling files are in [framework/basic-rest/product] like get-all-_ _ _

# To add a new language u should change [next-118next.config.js] , [site-settings.tsx] & maybe [get-directions.tsx]



# My steps for making this page:-

- _document.tsx
- _app.tsx
- index.tsx
- 404.tsx
- signup.tsx  // changed switch file
- signin.tsx
- faq.tsx
- contact-us.tsx
- terms.tsx
- privacy.tsx
- checkout.tsx
- complete-order.tsx
- search.tsx
- products
- bundles
- shops


# Some Problems:-
- the forms do not send data to any backend service 
- google maps do not work properly
