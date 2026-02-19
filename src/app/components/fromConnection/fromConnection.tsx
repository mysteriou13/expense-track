"use client";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
/* Redux API for adding user */
import { useAddUserMutation } from "@/app/redux/service/user";

export default function FormConnection() {
  // Redux mutation pour ajouter un utilisateur
  const [addUser, { data, isError, isLoading }] = useAddUserMutation();

  // type : connection
  //  ou inscription
  const [type, setType] = useState<"connection" | "inscription">("connection");

  // données du formulaire
  const [dataUser, setDataUser] = useState({ email: "", password: "" });

  // texte du bouton submit
  const [textButton, setTextButton] = useState("connection");

  // gestion des changements des inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  // fonction pour créer l'utilisateur ou se connecter via provider
  const createUser = async (provider: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

     await signIn(provider, {
      redirect: true,
      ...dataUser,
      callbackUrl: "/User",
    });


  

  };

  // Mettre à jour le texte du bouton en fonction du type
  useEffect(() => {
    setTextButton(type === "connection" ? "connection" : "inscription");
  }, [type]);

  return (
    <div className="text-white relative left-[35vw] top-[40vh] w-[31vw] h-[60%]">
      <form>
        {/* choix connection / inscription */}
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex cursor-pointer justify-around mb-5 gap-5 underline">
          <div className="text-2xl mb-4" onClick={() => setType("connection")}>
            Connection
          </div>
          <div className="text-2xl mb-4" onClick={() => setType("inscription")}>
            Inscription
          </div>
        </div>

        {/* inputs email / password */}
        <div className="grid gap-5 text-[1.2em]">
          <div className="flex justify-between">
            <label>Email</label>
            <input
              className="border-black bg-gray-600"
              name="email"
              type="email"
              placeholder="test@test.com"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between">
            <label>Mot de passe</label>
            <input
              className="border-black bg-gray-600"
              name="password"
              type="password"
              placeholder="Votre mot de passe"
              onChange={handleChange}
            />
          </div>

          {/* submit */}
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => createUser("credentials", e)}
            >
              {textButton}
            </button>
          </div>

          {/* login via providers */}
          <div className="flex justify-between mt-2">
            Connection avec :
            <button
              className="underline hover:cursor-pointer"
              onClick={(e) => createUser("github", e)}
            >
              Github
            </button>
            <button
              className="underline hover:cursor-pointer"
              onClick={(e) => createUser("google", e)}
            >
              Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
