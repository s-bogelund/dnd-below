import '../styles/globals.css'
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient} contextSharing={true}>
			<Component {...pageProps} />
		</QueryClientProvider>
	)
}

export default MyApp
