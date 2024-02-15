import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => setUser(response.data.results[0]))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div class="flex justify-center items-center h-screen ">
      {user && (
        <div class="bg-slate-400  p-12 w-2/6 h-2/6 flex flex-row rounded-md shadow-lg">
          <img
            class="overflow:hidden rounded-full"
            src={user.picture.large}
            alt="User"
          />
          <div class="ml-10">
            <h2 class="text-2xl font-bold mb-4">{`${user.name.first} ${user.name.last}`}</h2>
            <p className="font-semibold text-lg mb-1">
              {`Gender : `}
              <span className="text-base font-normal">{user.gender}</span>
            </p>
            <p className="font-semibold text-lg">
              {`Phone : `}
              <span className="text-base font-normal">{user.phone}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
