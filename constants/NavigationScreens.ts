interface INavigationScreens {
    dashboard: {
        name: string,
        displayName: string
    },
    pomodoro: {
        name: string,
        displayName: string
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
    }
}

export default NavigationScreens;