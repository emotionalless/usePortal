Пользовательский хук, позволяющий работать с порталами react.js

Он должен возвращать следующие сущности:

isOpen — boolean переменная, которая хранит в себе состояние портала. true — если портал открыт, false — если портал закрыт;
openPortal — это функция, при вызове которой будет открываться портал. Никаких аргументов она принимать не должна.
closePortal — это функция, при вызове которой будет закрываться портал. Никаких аргументов принимать она не должна.
Portal — JSX-компонент, который возвращает сам портал. В children этого компонента можно передать содержимое портала.
