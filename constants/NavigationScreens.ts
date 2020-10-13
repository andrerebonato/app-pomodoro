interface INavigationScreens {
    dashboard: {
        name: string,
        displayName: string
    },
    pomodoro: {
        name: string,
        displayName: string
    },
    navigator: {
        pomodoro: string,
        dashboard: string
    }
}

const NavigationScreens: INavigationScreens = {
    dashboard: {
        name: "SimpleDashboard",
        displayName: "Dashboard"
    },
    pomodoro: {
        name: "PomodoroClock",
        displayName: "Pomodoro"
    },
    navigator: {
        pomodoro: "PomodoroStack",
        dashboard: "DashboardStack"
    }
}

export default NavigationScreens;