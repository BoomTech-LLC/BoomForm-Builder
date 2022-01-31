import { useEffect, useState } from "react"

const usePagination = (initialPage) => {
    const [currentPage, setCurrentPage] = useState(initialPage)

    useEffect(() => {
        setCurrentPage(initialPage)
    }, [initialPage])

    const onFirstPageOpen = () => {
        setCurrentPage(0)
    }

    return { currentPage, onPageChange: setCurrentPage, onFirstPageOpen }
}

export default usePagination
