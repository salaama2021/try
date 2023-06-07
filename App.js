import React from 'react'

function Home() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App