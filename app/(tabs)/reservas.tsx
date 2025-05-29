import Header from "@/components/Header";
import ReservaStep1 from "@/components/ReservaStep1";
import ReservaStep2 from "@/components/ReservaStep2";
import ReservaStep3 from "@/components/ReservaStep3";
import ReservaStep4 from "@/components/ReservaStep4";
import React, { useState } from "react";
import { View } from "react-native";

const ReservasScreen = () => {
    const [step, setStep] = useState(1)

    const renderStep = () => {
        switch (step) {
        case 1:
            return <ReservaStep1 onNext={() => setStep(2)} />;
        case 2:
            return <ReservaStep2 onNext={() => setStep(3)} onBack={() => setStep(1)} />;
        case 3:
            return <ReservaStep3 onNext={() => setStep(4)} onBack={() => setStep(2)} />;
        case 4:
            return <ReservaStep4 onBack={() => setStep(3)} />;
        default:
            return null;
        }
    };
    return (
        <>        
        <Header />
        <View style={{flex: 1}}>
            {renderStep()}
        </View>
        </>
    )
}

export default ReservasScreen;