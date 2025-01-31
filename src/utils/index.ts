interface useFetchProps {
    query: string
    variables: object
}

const useFetch = async ({ query, variables }: useFetchProps): unknown => {
    const response = await fetch('http://127.0.0.1:4000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables,
        }),
    })

    const data = await response.json()

    return data
}

export { useFetch }
