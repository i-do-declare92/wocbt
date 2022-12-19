function handleSubmit(event) {
    event.preventDefault();

    const data = FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


const data = getFormDataAsJSON(form)

doSomething(data.email, data.firstName, data.lastName);
