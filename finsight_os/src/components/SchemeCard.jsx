function SchemeCard({ scheme }) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-white">

      <h2 className="text-xl font-bold text-blue-400">

        {scheme.name}

      </h2>

      <p className="mt-3 text-gray-300">

        {scheme.description}

      </p>

      <div className="mt-4">

        <h3 className="font-semibold text-green-400">

          Benefits

        </h3>

        <p className="text-gray-300">

          {scheme.benefits}

        </p>

      </div>

      <div className="mt-4">

        <h3 className="font-semibold text-yellow-400">

          Eligibility

        </h3>

        <p className="text-gray-300">

          {scheme.eligibility}

        </p>

      </div>

      <div className="mt-5">

        <a

          href={scheme.officialWebsite}

          target="_blank"

          rel="noopener noreferrer"

          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"

        >

          Official Website

        </a>

      </div>

    </div>

  );

}

export default SchemeCard;