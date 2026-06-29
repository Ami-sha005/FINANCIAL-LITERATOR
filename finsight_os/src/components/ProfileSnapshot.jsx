function ProfileSnapshot({ profile }) {

  return (

    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-white">

      <h2 className="text-xl font-bold mb-4">

        Profile Snapshot

      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div>

          <p className="text-gray-400">

            Age

          </p>

          <p>

            {profile.age}

          </p>

        </div>

        <div>

          <p className="text-gray-400">

            Occupation

          </p>

          <p>

            {profile.occupation}

          </p>

        </div>

        <div>

          <p className="text-gray-400">

            Risk Profile

          </p>

          <p>

            {profile.riskProfile}

          </p>

        </div>

        <div>

          <p className="text-gray-400">

            Location

          </p>

          <p>

            {profile.location}

          </p>

        </div>

      </div>

    </div>

  );

}

export default ProfileSnapshot;