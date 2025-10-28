import styles from "@/styles/dashboard.module.css";
import ChartWrapper from "@/components/chartwrapper";

const Dashboard = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.top}`}>
                <div className={`${styles.card} !w-[500px] shadow`}>
                    <div className={`${styles.cardIn}`}>
                        <div className="flex justify-between">

                        </div>
                    </div>
                </div>
                <div className={`${styles.card} shadow`}>
                    <div className={`${styles.cardIn}`}>
                        <div className="flex justify-between">

                        </div>
                    </div>
                </div>
                <div className={`${styles.card} shadow`}>
                    <div className={`${styles.cardIn}`}>
                        <div className="flex justify-between">

                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.bottom}`}>
                <div className="w-[500px] bg-white/90 flex-grow-10 rounded">
                    <ChartWrapper />
                </div>
                <div className="w-[350px] min-h-[400px] bg-white/90 flex-grow rounded">
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
