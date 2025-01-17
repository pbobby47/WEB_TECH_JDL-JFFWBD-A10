const getFakeData = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  console.log(data);

  data.map((val, ind) => {
    // console.log(ind, "---", val);
    let product = document.createElement("div");

    product.innerHTML = `
        <div class="group relative">
        <img src="${val.image}" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80">
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${val.title}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">${val.category}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$${val.price}</p>
        </div>
      </div>
      `;

    console.log(product);
    let productsContainer = document.getElementById("productsContainer");
    productsContainer.append(product);
  });
};

getFakeData();
