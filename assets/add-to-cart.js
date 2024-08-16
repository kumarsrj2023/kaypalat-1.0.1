document.addEventListener('alpine:init', () => {
    Alpine.data('cartHandler', (productId) => ({
        product: null,
        quantity: 1, // Initialize the quantity
        selectedVariantId: "", // Store the selected variant ID
        selectedOptions: {}, // Store the selected options for each dropdown
        hasVariants: "",

        init() {
            const productDataScript = document.querySelector(`#product-data-${productId}`);
            if (!productDataScript) {
                return;
            }
            this.product = JSON.parse(productDataScript.textContent);
            this.hasVariants = this.product.variants.length;

            // Parse the variant JSON data and store it
            if (this.hasVariants > 1) {
                // now auto select one varient as a default value
                this.product.variants.forEach(variant => {
                    if (this.selectedVariantId === '') {
                        if (variant.available) {
                            this.selectedVariantId = variant.id;
                        }
                    }
                });
            } else {
                this.selectedVariantId = this.product.variants[0].id;
            }
        },

        updateVariantId() {
            // Find the matching variant based on the selected options
            this.selectedVariantId = this.product.variants.find(variant => {
                return variant.options.every((option, index) => option === this.selectedOptions[index]);
            })?.id || null;
        },

        addToCart() {
            if (!this.selectedVariantId) {
                alert('Please select a variant.');
                return;
            }
            
        
            fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: JSON.stringify({
                    quantity: this.quantity,
                    id: this.selectedVariantId,
                }),
            })
            .then(response => response.json().then(data => ({ status: response.status, data })))
            .then(({ status, data }) => {
                if (status === 200) {
                    this.updateCartCount();
                } else if (status === 422) {
                    alert(`Error: ${data.message}`);
                } else {
                    alert('Failed to add item to cart. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error adding item to cart:', error);
                alert('Failed to add item to cart. Please try again.');
            });
        },        

        updateCartCount() {
            fetch('/cart.js')
                .then(response => response.json())
                .then(cart => {
                    document.querySelector(".cart-count").innerHTML = cart.item_count;
                    if (cart.item_count > 0) {
                        document.querySelector(".cart-count").style.display = "inline-block";
                    }
                });
        },
    }));
});
