import React from 'react'

export default React.createContext({
    meetups: [],
    stats: [],
    addStat: () => {},
    fetchStats: () => {}
})