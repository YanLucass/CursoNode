document.addEventListener('DOMContentLoaded', function () {
    const titleInput = document.querySelector('input[name="title"]');
    if (titleInput) {
        const title = titleInput.value;
        console.log(title);
    }
});
