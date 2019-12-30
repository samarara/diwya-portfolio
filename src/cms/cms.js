import CMS from 'netlify-cms-app'
import React from 'react'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
// import IndexPagePreview from './preview-templates/__IndexPagePreview'
import PhotographyPreview from './preview-templates/PhotographyPagePreview'

import BannerImage from '../components/BannerImage'

// register full banner image component
// CMS.registerEditorComponent({
//   id: "banner-image",
//   label: "Banner Image",
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [{name: 'banner-image', label: 'Banner Image', widget: 'object', fields: [{name: 'image', label: 'Image', widget: 'image'}, {name: 'caption', label: 'Caption', widget: 'string'}, {name: 'alt', label: 'alt Text', widget: 'string'}]}],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^banner-image (\S+)$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: function(match) {
//     console.log(match)
//     return {
//       id: match[1]
//     };
//   },
//   // Function to create a text block from an instance of this component
//   toBlock: function(obj) {
//     return 'banner-image ' + obj.id;
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: function(obj) {
//     console.log(obj)
//     return (
//       <BannerImage src={obj.publicUrl} alt={obj.alt} />
//     );
//   }
// });

// CMS.registerPreviewStyle('../components/all.sass')
CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

// CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('photo', PhotographyPreview)
CMS.registerPreviewTemplate('illustrations', PhotographyPreview)
