import firebase from "firebase/app";
import "firebase/firestore";
import { BinFeature, BinFeatureCollection } from "bins";

export const initialiseDatabaseConnection = (): firebase.firestore.Firestore => {
    console.log('Initialising firestore DB');
    firebase.initializeApp({
        // apiKey: "<YOUR API KEY>",
        // authDomain: "<YOUR AUTH DOMAIN>",
        projectId: 'wyndham-bins-data'
    });
    return firebase.firestore();
};

export const fetchRecentData = async (db: firebase.firestore.Firestore): Promise<BinFeatureCollection[]> => {
    console.log('Fetching collection features from firestore DB');

    const collection = await db.collection('features')
        .where("type", "==", "FeatureCollection")
        .get();

    return collection.docs.map(doc => doc.data()) as BinFeatureCollection[];
};