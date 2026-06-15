const petOwner = {
    name: "Hero Alom",
    contact: {
        phone: "88 00 7575 88 00",
        mail: "contact@mail.com"
    },
    pet:{
        name: "Lofie",
        info: {
            color: "Black",
            weight: "1.2 KG",
            // food:{
            //     price: 10
            // },
        },
    },
};

console.log(petOwner.pet.info?.food?.price);