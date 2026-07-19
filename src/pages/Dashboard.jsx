import React, {useState} from "react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const styles = {
    container: {
        padding: '32px',
        backgroundColor: '#0a0a0b', 
        minHeight: '100vh', 
        fontFamily: '"Cinzel", "Georgia", "Times New Roman", serif'
    },
    title: { 
        fontSize: '26px', 
        color: '#bfa17a', 
        marginBottom: '24px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        borderBottom: '2px solid #4a0d0d',
        paddingBottom: '12px' 
    },
    grid: { 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '24px' 
    },
    card: { 
        backgroundColor: '#111113', 
        padding: '20px', 
        borderRadius: '4px', 
        boxShadow: '0 0 20px rgba(0,0,0,0.95),inset 0 0 10px rgba(74,13,13,0.15)',
        border: '1px solid #331010' 
    },
    cardTitle: {
        fontSize: '16px', 
        color: '#9c8468', 
        marginBottom: '16px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        borderLeft: '3px solid #800c0c',
        paddingLeft: '10px'
    }
};

// Child Component 1: Engagement Area Chart
function EngagementChart({data}) {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="diabloBlood" x1="0" y1="0" x2="0" y2="1"
                    >
                        <stop offset="5%" stopColor="#800c0c" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#1a0202" stopOpacity={0.0} />
                    </linearGradient>
                </defs>
                    <CartesianGrid strokeDasharray="3 3"
                    stroke="#1f1a1a" 
                    vertical={false}/>
                    <XAxis 
                        dataKey="day"
                        stroke="#bfa17a"
                        tickLine={false} />
                    <YAxis  
                        stroke="#73604c"
                        tickLine={false} />
                    <Tooltip contentStyle={{
                        backgroundColor: '#0d0d0f',
                        borderColor: '#800c0c', color: '#bfa17a' 
                    }}/>
                    <Area
                        type="monotone" 
                        dataKey="clicks"
                        stroke="#ff0033" 
                        fill="url(#diabloBlood)"
                        strokeWidth={2}
                    /> 
            </AreaChart>
        </ResponsiveContainer>
    );
}

// Child Component 2: Performance Bar Chart
function PerformanceChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
            <CartesianGrid 
                strokeDasharray="3 3"
                stroke="#1f1a1a"
                vertical={false} />
            <XAxis 
                dataKey='day' stroke="#73604c"
                tickLine={false} />
            <YAxis 
                stroke="#73604c"
                tickLine={false} />
            <Tooltip 
                contentStyle={{ backgroundColor: '#0d0d0f', borderColor: '#800c0c', color: '#bfa17a' }} />
            <Bar 
                dataKey="postsCreated" 
                fill="#660000" 
                activeBar={{ fill: '#ff0033'}}
                radius={[0, 0, 0, 0]} />
        </BarChart>
        </ResponsiveContainer>
    );
}

function Dashboard() {
    //Using state to manage local data representation
    const [metricsData] = useState([
        { day: 'Mon', clicks: 240, postsCreated: 4 },
        { day: 'Tue', clicks: 390, postsCreated: 7 },
        { day: 'Wed', clicks: 480, postsCreated: 5 },
        { day: 'Thu', clicks: 510, postsCreated: 9 },
        { day: 'Fri', clicks: 620, postsCreated: 12 },
    ]);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>System Analytics Dashboard</h1>
            <div style={styles.grid}>
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>User Engagement Over Time (Clicks)</h3>
                <EngagementChart data={metricsData} />
            </div>
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Daily Community Growth (Post)</h3>
                <PerformanceChart data={metricsData} />
            </div>
            </div>
        </div>
    );
}

export default Dashboard;