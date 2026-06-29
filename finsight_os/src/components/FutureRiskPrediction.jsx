function FutureRiskPrediction({
  income,
  expenses,
})
{
  const futureBalance =
    income - expenses;

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-4">

        Future Risk Prediction

      </h2>

      {futureBalance > 10000 ? (

        <p className="text-green-400">

          Low financial risk predicted.

        </p>

      ) : (

        <p className="text-red-400">

          Cash flow stress may occur
          within upcoming months.

        </p>

      )}

    </div>
  );
}

export default FutureRiskPrediction;