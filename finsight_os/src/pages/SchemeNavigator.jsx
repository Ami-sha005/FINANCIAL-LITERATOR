import axios from "axios";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SchemeForm from "../components/SchemeForm";
import SchemeCard from "../components/SchemeCard";
import EligibilityScore from "../components/EligibilityScore";
import BenefitCalculator from "../components/BenefitCalculator";
import AIExplanationPanel from "../components/AIExplanationPanel";


function SchemeNavigator() {

  const [age,setAge] = useState("");
  const [occupation,setOccupation] = useState("");
  const [income,setIncome] = useState("");
  const [schemeResponse,setSchemeResponse] = useState(null);

const [loading, setLoading] = useState(false);

  const checkEligibility = async () => {

  setLoading(true);

  const payload = {

    user: {

    name: "",

    age: Number(age),

    occupation: occupation,

    monthlyIncome: Number(income)

  },

  goal: {

    goalName: "General Financial Assistance"

  }
  };

  try {

    const response = await axios.post(

      `${import.meta.env.VITE_API_BASE_URL}/scheme/find`,

      payload

    );

    setSchemeResponse(response.data);

  }

  catch (error) {

    console.log(error);

    setSchemeResponse({

      eligibilityScore: 0,

      estimatedBenefit: 0,

      analysis: "AI Service Temporarily Unavailable",

      schemes: []

    });

  }

  finally {

    setLoading(false);

  }

};



  return (
    <MainLayout>

      <h1 className="text-3xl font-bold text-white mb-8">
        Scheme Navigator
      </h1>

      <SchemeForm
        age={age}
        setAge={setAge}
        occupation={occupation}
        setOccupation={setOccupation}
        income={income}
        setIncome={setIncome}
        checkEligibility={checkEligibility}
      />

      {schemeResponse && (

  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

    <EligibilityScore
      score={schemeResponse.eligibilityScore}
    />

    <BenefitCalculator
    benefit={schemeResponse.estimatedBenefit}
/>

<AIExplanationPanel
    report={schemeResponse.analysis}
/>

  </div>

)}

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {schemeResponse &&
 schemeResponse.schemes &&
 schemeResponse.schemes.map((scheme,index)=>(
            <SchemeCard
              key={index}
              scheme={scheme}
            />
          )
        )}

      </div>

    </MainLayout>
  );
}

export default SchemeNavigator;