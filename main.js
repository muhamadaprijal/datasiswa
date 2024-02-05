import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDFYmmVvk-jLZIeAdYKiTwVw2jqd4VINFA",
  authDomain: "insan-cemerlang.firebaseapp.com",
  projectId: "insan-cemerlang",
  storageBucket: "insan-cemerlang.appspot.com",
  messagingSenderId: "579109661574",
  appId: "1:579109661574:web:4a7cd4060f70eded945a07"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarSiswa() {
  const siswaRef = collection(db, "siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querySnapshot = await getDocs(q);

  let retval = [];
  querySnapshot.forEach((doc) => {
    retval.push({ id: doc.id, nama: doc.data().nama });
  });

  return retval;
}

export async function tambahSiswa(val) {
    try {
      const docRef = await addDoc(collection(db, "siswa"), {
        nama: val
      });
      console.log('Berhasil menyimpan dokumen dengan ID: ' + docRef.id);
    } catch (e) {
      console.log('Error menambah dokumen: ' + e);
    }
 }