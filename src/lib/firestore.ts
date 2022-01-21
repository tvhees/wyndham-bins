import firebase from "firebase/app";
import "firebase/firestore";
import { BinFeatureCollection } from "bins";

export const initialiseDatabaseConnection = (): firebase.firestore.Firestore => {
    if (!firebase.apps.length) {
        console.log('Initialising firestore DB');
        const firebaseConfig = {
            apiKey: "AIzaSyB4RDTcIYiHW2ZR58-Wt6Bts0rH5QCJqzQ",
            authDomain: "wyndham-bins-data.firebaseapp.com",
            projectId: "wyndham-bins-data",
            storageBucket: "wyndham-bins-data.appspot.com",
            messagingSenderId: "584917108713",
            appId: "1:584917108713:web:95beb9e7cc5f5ff13f6d78"
        };


        firebase.initializeApp(firebaseConfig);
    }
    return firebase.firestore();
};

export const fetchRecentData = async (db: firebase.firestore.Firestore): Promise<BinFeatureCollection[]> => {
    console.log('Fetching collection features from firestore DB');
    const date = new Date(Date.now() - 86400000);
    const collection = await db.collection('features')
        .where("type", "==", "FeatureCollection")
        .where("createdAt", ">", date)
        .get();

    return collection.docs.map(doc => doc.data()) as BinFeatureCollection[];
};