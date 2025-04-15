import { useFormik } from "formik"
import { useEffect } from "react"

export const ProductVariant = ({ variant, form, originalIndex }) => {
  const variantForm = useFormik({
    initialValues: {
      color: variant.color,
      quantity: variant.quantity,
      images: variant.images,
      sizes: [...variant.sizes]
    }
  })

  // update the main form as soon as something changes in variant form
  useEffect(() => {
    // if a variant from array matches with original variant then return new values, otherwise return variant from the array
    const updatedVariantsList = form.values.variants.map(
      (currentVariant, index) => {
        if (index === originalIndex) {
          return { ...variantForm.values }
        } else {
          return currentVariant
        }
      }
    )

    form.setFieldValue("variants", updatedVariantsList)
  }, [variantForm.values])

  const changeSize = (value, indexToChange, key) => {
    const updatedSizes = variantForm.values.sizes.map((size, index) => {
      return index === indexToChange ? { ...size, [key]: value } : size
    })
    variantForm.setFieldValue("sizes", updatedSizes)
  }

  const deleteVariantSize = index => {
    const updatedSizes = variantForm.values.sizes.filter(size => {
      return size !== variantForm.values.sizes[index]
    })
    variantForm.setFieldValue("sizes", updatedSizes)
  }

  const deleteVariant = (form, variant) => {
    form.setFieldValue(
      "variants",
      form.values.variants.filter(currentVariant => {
        return currentVariant !== variant
      })
    )
  }

  return (
    <div className="variant-div">
      <figure>
        <h3>Variant Details</h3>
        <button
          type="button"
          onClick={() => {
            deleteVariant(form, variant)
          }}
        >
          🗑️
        </button>
      </figure>
      {console.log("Form:", form.values)}
      {console.log("Variant:", variant)}

      {/* Variant info */}
      <figure className="variant-info-wrapper">
        <label htmlFor="color">
          <p>Color Name</p>
          <input
            type="text"
            name="color"
            value={variantForm.values.color}
            onChange={variantForm.handleChange}
          />
        </label>

        <label htmlFor="quantity">
          <p>Stock Quantity</p>
          <input
            type="text"
            name="quantity"
            value={variantForm.values.quantity}
            onChange={variantForm.handleChange}
          />
        </label>

        <label htmlFor="add-images">
          <p>Images</p>
          <button type="button" id="upload-img-btn">
            📤 Upload Images
          </button>
        </label>
      </figure>

      <figure id="image-previews">
        <p>Image Previews</p>
        <div>
          {variant.images.map((url, index) => {
            return <img src={url} alt="product variant photo" />
          })}
        </div>
      </figure>

      {/* Variant sizes */}
      <figure id="available-sizes-wrapper">
        <div>
          <h2>Available Sizes</h2>
          <button
            type="button"
            onClick={() => {
              variantForm.setFieldValue("sizes", [
                ...variantForm.values.sizes,
                { men: 0, women: 0 }
              ])
            }}
          >
            + Add Size
          </button>
        </div>

        <div className="sizes">
          {variantForm.values.sizes.map((size, index) => {
            return (
              <figure>
                <label htmlFor="men">
                  <p>Men's Size</p>
                  <input
                    type="text"
                    name="men"
                    value={size.men}
                    onChange={event => {
                      changeSize(event.target.value, index, "men")
                    }}
                  />
                </label>

                <label htmlFor="women">
                  <p>Women's Size</p>
                  <input
                    type="text"
                    name="women"
                    value={size.women}
                    onChange={event => {
                      changeSize(event.target.value, index, "women")
                    }}
                  />
                </label>

                <button
                  id="delete-size-btn"
                  type="button"
                  onClick={() => {
                    deleteVariantSize(index)
                  }}
                >
                  ❌
                </button>
              </figure>
            )
          })}
        </div>

        <div>
          <p>Size Summary</p>
          <p>
            {variantForm.values.sizes.map(size => {
              return (
                <span>
                  M {size.men} / W {size.women}
                </span>
              )
            })}
          </p>
        </div>
      </figure>
    </div>
  )
}
