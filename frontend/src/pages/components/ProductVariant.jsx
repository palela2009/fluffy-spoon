const changeSize = event => {}

export const ProductVariant = ({ variant, form }) => {
  return (
    <div className="variant-div">
      <figure>
        <h3>Variant Details</h3>
        <button type="button">🗑️</button>
      </figure>

      <figure className="variant-info-wrapper">
        <label htmlFor="color">
          <p>Color Name</p>
          <input type="text" value={variant.color} />
        </label>

        <label htmlFor="quantity">
          <p>Stock Quantity</p>
          <input type="text" value={variant.quantity} />
        </label>

        <label htmlFor="add-images">
          <p>Images</p>
          <button id="upload-img-btn">📤 Upload Images</button>
        </label>
      </figure>

      <figure id="image-previews">
        <p>Image Previews</p>
        <div>
          {variant.images.map(url => {
            console.log(url)
            return (
              <>
                <img src={url} alt="" />
              </>
            )
          })}
        </div>
      </figure>

      <figure id="available-sizes-wrapper">
        <div>
          <h2>Available Sizes</h2>
          <button type="button">+ Add Size</button>
        </div>

        <div className="sizes">
          {variant.sizes.map((size, index) => {
            return (
              <figure>
                <label htmlFor="men">
                  <p>Men's Size</p>
                  <input
                    type="text"
                    name="men"
                    value={size.men}
                    onChange={() => {
                      changeSize()
                    }}
                  />
                </label>

                <label htmlFor="women">
                  <p>Women's Size</p>
                  <input
                    type="text"
                    name="women"
                    value={size.women}
                    onChange={() => {
                      changeSize()
                    }}
                  />
                </label>

                <button id="delete-size-btn" type="button">
                  ❌
                </button>
              </figure>
            )
          })}
        </div>

        <div>
          <p>Size Summary</p>
          <p>
            {variant.sizes.map(size => {
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
