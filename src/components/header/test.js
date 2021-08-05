import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("bBnUfgk1lE6oxBHbuEBG")
  .collection("cartItems")
  .doc("fQ6BAltkBXwpyzPRt8WN");
firestore.doc("/users/bBnUfgk1lE6oxBHbuEBG/cartItems/fQ6BAltkBXwpyzPRt8WN");
firestore.collection("/users/bBnUfgk1lE6oxBHbuEBG/cartItems");
