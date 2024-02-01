import { collection, getDocs, getFirestore, getDoc, doc, query, where, addDoc, updateDoc } from "firebase/firestore";
import app from "./init";
import bcyrpt from "bcrypt";

const firestore = getFirestore(app);
export async function retrieveData(collectionName: string) {
	const snapshot = await getDocs(collection(firestore, collectionName));
	const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	return data;
}
export async function retrieveDataById(collectionName: string, id: string) {
	const snapshot = await getDoc(doc(firestore, collectionName, id));
	const data = snapshot.data();
	return data;
}

export async function register(data: { fullname: string; email: string; password: string; role?: string }) {
	const q = query(collection(firestore, "users"), where("email", "==", data.email));
	const snapshot = await getDocs(q);
	const users = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	if (users.length > 0) {
		return {
			status: false,
			message: "Email already registered",
			statusCode: 400,
		};
	} else {
		data.role = "member";
		data.password = await bcyrpt.hash(data.password, 10);
	}
	try {
		await addDoc(collection(firestore, "users"), data);
		return { status: true, message: "Register Success", statusCode: 200 };
	} catch (err) {
		return { status: false, message: "Register Failed", statusCode: 400 };
	}
}
export async function login(data: { email: string }) {
	const q = query(collection(firestore, "users"), where("email", "==", data.email));
	const snapshot = await getDocs(q);
	const user = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	if (user.length > 0) {
		return user[0];
	} else {
		return null;
	}
}

export async function loginWithGoogle(data: any, callback: Function) {
	console.log("testing");

	try {
		const q = query(collection(firestore, "users"), where("email", "==", data.email));
		const snapshot = await getDocs(q);
		const user = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		console.log(user);

		if (user.length > 0) {
			data.role = data[0].role;
			console.log("Testing 2");
			await updateDoc(doc(firestore, "users", user[0].id), data).then(() => {});
		} else {
			console.log("Testing 3");
			await addDoc(collection(firestore, "users"), data).then(() => {
				callback({ status: true, data: data });
			});
		}
	} catch (err) {
		console.error("Something wrong  : ", err);
	}
}
