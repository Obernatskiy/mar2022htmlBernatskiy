let post = JSON.parse(localStorage.getItem('title name'));
const divElement = document.createElement('div');
divElement.setAttribute('class', 'post')
document.body.append(divElement);

for (const item in post) {
    if (typeof post[item] !== 'object') {
        const innerDiv = document.createElement('div');
        innerDiv.setAttribute('class','inner')
        innerDiv.innerHTML = `${item} : ${post[item]}`
        divElement.append(innerDiv)
    }
}

fetch(` https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {

        const commentDiv = document.createElement('div');
        commentDiv.setAttribute('class', 'comment')
        document.body.append(commentDiv);
        // commentDiv.innerText = 'hello'

        for (const item of value) {
            const divElement1 = document.createElement('div');
            divElement1.setAttribute('class', 'info')
            commentDiv.append(divElement1);

            for (const itemKey in item) {
                const element = document.createElement('div');
                element.innerHTML = `${itemKey} ${item[itemKey]}`
                divElement1.append(element);

            }
        }

    })

