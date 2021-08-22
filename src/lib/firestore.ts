import firebase from "firebase";

export const initialiseDatabaseConnection = (): firebase.firestore.Firestore => {
    console.log('Initialising firestore DB');
    firebase.initializeApp({
        // apiKey: "<YOUR API KEY>",
        // authDomain: "<YOUR AUTH DOMAIN>",
        projectId: 'wyndham-bins-data'
    });
    return firebase.firestore();
};

export const fetchRecentData = async (db: firebase.firestore.Firestore) => {
    console.log('Fetching collection features from firestore DB');
    return await db.collection('features').where("type", "==", "FeatureCollection").get();
};