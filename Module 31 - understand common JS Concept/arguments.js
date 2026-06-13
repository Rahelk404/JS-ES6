function add(a, b) {
    console.log(arguments);
    const param = [...arguments]
    console.log(param);
}

add(88, 10, 32, 12, 33, 22)