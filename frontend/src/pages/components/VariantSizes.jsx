import { changeSize, deleteVariantSize } from "./ProductVariantFunctions"

const VariantSizes = ({ variantForm }) => {
  return (
    <figure id="available-sizes-wrapper">
      <div>
        <p>Available Sizes</p>
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
            <figure key={index}>
              <label htmlFor="men">
                <p>Men's Size</p>
                <input
                  type="text"
                  name="men"
                  value={size.men}
                  onChange={event => {
                    changeSize(event.target.value, index, "men", variantForm)
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
                    changeSize(event.target.value, index, "women", variantForm)
                  }}
                />
              </label>

              <button
                id="delete-size-btn"
                type="button"
                onClick={() => {
                  deleteVariantSize(index, variantForm)
                }}
              >
                ❌
              </button>
            </figure>
          )
        })}
      </div>

      <div id="size-summary-wrapper">
        <p>Size Summary</p>
        <p>
          {variantForm.values.sizes.map((size, index) => {
            return (
              <span key={index}>
                M {size.men} / W {size.women}
              </span>
            )
          })}
        </p>
      </div>
    </figure>
  )
}

export default VariantSizes
