import firestore from "../firebase.js";
import products from "./backup.js";

export const seedProducts = async () => {
    const collectionRef = firestore.collection("products");
    const data = await collectionRef.get();

    // Checking if database is empty or not
    if (!data.empty) {
        return;
    }

    const promises = products.map(async (product) => {
        return await collectionRef.add(product);
    });

    await Promise.all(promises);
};

export const getProducts = async () => {
    await seedProducts();

    const collectionRef = firestore.collection("products");

    const queryData = await collectionRef.get();

    // Returns An array of all the documents in the QuerySnapshot.
    const documents = queryData.docs;

    // data() > Return an object with all the fields in the doc (apart from id)
    const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));

    // Returning an array of products with their unique IDs.
    return data;
};

export const updateProduct = async (id, record) => {
    const collectionRef = firestore.collection("products");
    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};
