// export const mockData = [
//     {
//         organization: "Lendsqr",
//         username: "Grace Effiom",
//         email: "grace@lendsqr.com",
//         phone: "07060780922",
//         date_joined: "Apr 30, 2020 10:00 AM",
//         status: "Blacklisted",
//     },
//     {
//         organization: "Irorun",
//         username: "Debby Ogana",
//         email: "debby2@irorun.com",
//         phone: "08160780928",
//         date_joined: "Apr 30, 2020 10:00 AM",
//         status: "Pending",
//     },
//     {
//         organization: "Lendsqr",
//         username: "Tosin Dokunmu",
//         email: "tosin@lendsqr.com",
//         phone: "08060780900",
//         date_joined: "Apr 10, 2020 10:00 AM",
//         status: "Active",
//     },
//     {
//         organization: "Lendstar",
//         username: "Adedeji",
//         email: "adedeji@lendsqr.com",
//         phone: "08078903721",
//         date_joined: "May 15, 2020 10:00 AM",
//         status: "Inactive",
//     },
//     {
//         organization: "Lendsqr",
//         username: "Grace Effiom",
//         email: "grace@lendsqr.com",
//         phone: "07060780922",
//         date_joined: "Apr 30, 2020 10:00 AM",
//         status: "Active",
//     },
// ];
export interface UserRow {
    organization: string;
    username: string;
    email: string;
    phone: string;
    date_joined: string;
    status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

const organizations = ["Lendsqr", "Irorun", "Lendstar", "Paywise", "Zedvance"];
const names = ["Grace Effiom", "Debby Ogana", "Tosin Dokunmu", "Adedeji", "Chinedu Obi", "Fatima Yusuf", "Ayo Balogun"];
const statuses: UserRow["status"][] = ["Active", "Inactive", "Pending", "Blacklisted"];

function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePhone(index: number): string {
    const base = "07000000000";
    return base.substring(0, 6) + (index + 1000).toString();
}

function generateMockData(count = 100): UserRow[] {
    return Array.from({ length: count }, (_, i) => {
        const name = getRandomItem(names);
        return {
            organization: getRandomItem(organizations),
            username: name,
            email: `${name.toLowerCase().replace(/\s/g, "")}${i}@example.com`,
            phone: generatePhone(i),
            date_joined: new Date(Date.now() - Math.random() * 1e10).toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }),
            status: getRandomItem(statuses),
        };
    });
}

export const mockData: UserRow[] = generateMockData();
