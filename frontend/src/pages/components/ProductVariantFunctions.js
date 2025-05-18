export const changeSize = (value, indexToChange, key, variantForm) => {
  const updatedSizes = variantForm.values.sizes.map((size, index) => {
    return index === indexToChange ? { ...size, [key]: value } : size
  })
  variantForm.setFieldValue("sizes", updatedSizes)
}

export const addVariantImage = (image, variantForm) => {
  const reader = new FileReader()
  reader.onload = url => {
    variantForm.setFieldValue("images", [
      ...variantForm.values.images,
      url.target.result
    ])
  }
  reader.readAsDataURL(image)
  console.log(variantForm.values.images)
}

export const deleteVariantSize = (index, variantForm) => {
  const updatedSizes = variantForm.values.sizes.filter(size => {
    return size !== variantForm.values.sizes[index]
  })
  variantForm.setFieldValue("sizes", updatedSizes)
}

export const deleteVariant = (form, variant) => {
  form.setFieldValue(
    "variants",
    form.values.variants.filter(currentVariant => {
      return currentVariant !== variant
    })
  )
}
