




const SeacrhPage = () => {
    return ( 
        <>
            <form className="search-form ">
                <input type="search" className="searching long-placeholder"  placeholder="What service are you looking for today?" />
                        <button className="">
                        <div className="submit-button-icon"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path>
                        </svg>
                        </div>
                        </button>
                
                    </form>
                </>
                );
}
export default SeacrhPage;