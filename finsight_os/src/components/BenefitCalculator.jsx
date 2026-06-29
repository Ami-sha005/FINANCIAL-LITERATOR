function BenefitCalculator({ benefit }) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-4">

        Estimated Benefits

      </h2>

      <h3 className="text-3xl font-bold text-green-400">

        {benefit}

      </h3>

      <p className="mt-2 text-gray-400">

        Estimated yearly government support

      </p>

    </div>

  );

}

export default BenefitCalculator;