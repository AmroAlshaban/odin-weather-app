export function getLastMonthYesterdayISO8601() {
    const todayY = new Date();
    todayY.setDate(todayY.getDate() - 1);

    const yyyyY = todayY.getFullYear();
    const mmY = String(todayY.getMonth() + 1).padStart(2, '0');
    const ddY = String(todayY.getDate()).padStart(2, '0');
    const yesterday = `${yyyyY}-${mmY}-${ddY}`;

    const todayLM = new Date();
    todayLM.setMonth(todayLM.getMonth() - 1);

    const yyyyLM = todayLM.getFullYear();
    const mmLM = String(todayLM.getMonth() + 1).padStart(2, '0');
    const ddLM = String(todayLM.getDate()).padStart(2, '0');
    const lastMonth = `${yyyyLM}-${mmLM}-${ddLM}`;

    return [lastMonth, yesterday];
};
