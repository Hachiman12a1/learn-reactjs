```
src
|** components (shared components between features)
| |** Loading
| |** index.jsx
| |** styles.scss
|
|** features
| |** Todo
| |** components (components of feature Todo)
| |** pages (pages of feature Todo)
| |** index.jsx (entry point of feature Todo)
|
|** App.js  
```
```
FiltersViewer

const filters = {
isPromotion: true,
salePrice_lte: 100,
salePrice_gte: 100,
}
```
```
FILTER_LIST

id: number
getLabel: (filters) => string
isActive: (filters) => true/false
isVisible: (filters) => true/false
isRemovable: boolean
onRemove: func
onToggle: func
```

```
DetailPage handleSubmit
|__ AddToCartForm (form management)
|  |__ QuantityField
```

```
/products/:productId --> ProductDescription 
/products/:productId/additional --> ProductAdditional 
/products/:productId/reviews --> ProductReviews
```