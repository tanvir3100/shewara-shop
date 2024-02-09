import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCard = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: cards = [] } = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cards')
            return res.data
        }
    })
    return [cards, refetch]
};

export default useCard;