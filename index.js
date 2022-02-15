const url = 'http://localhost:3000/products'

const list_data = document.querySelector('.list-data');
fetch(url).then((products) => products.json()).then((res) => {
    list_data.innerHTML = res.map((product) => (
        `<tr>
            <th scope="row">${product.id}</th>
            <td>${product.name}</td>
            <td>${product.desc}</td>
            <td>${product.price}$</td>
            <td>
                <img src=${product.image} class="img-responsive" width="100" alt="Image">
            </td>
            <td>
                <button type="button" data-id="${product.id}" class="btn btn-danger btn-remove">Xóa</button>
                <a href="edit.html?id=${product.id}" onclick=(click(${product.id})) type="button" data-id="${product.id}" class="btn btn-primary">Sửa</a>
            </td>
      </tr>`
    )).join('');
    const btn_remove = document.querySelectorAll('.btn-remove');
    btn_remove.forEach((btn) => {
        console.log(btn);
        btn.addEventListener('click', async () => {
            if (window.confirm('Bạn có muốn xóa không ?')) {
                const id = btn.dataset.id
                console.log(id);
                const data = await fetch(`${url}/${id}`, {
                    method: 'DELETE',
                })
            }
        })
    })
})




