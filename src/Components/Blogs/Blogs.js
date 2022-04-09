import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5'>
            <h1 className='text-5xl text-center font-semibold' >Blogs</h1>
            <div>
                <h3 className='text-3xl font-bold'>Q1. What is Context API?</h3>
                <p className='mt-3 text-xl'><span className='font-bold text-2xl'>Answer: </span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <hr />
            <div className='mt-8'>
                <h3 className='text-3xl font-bold'>Q2. What Is Semantic HTML Tags?</h3>
                <p className='mt-3 text-xl'><span className='font-bold text-2xl'>Answer: </span>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a  tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them</p>
            </div>
            <hr />
            <div className='mt-8'>
                <h3 className='text-3xl font-bold'>Q3. What is Inline Block Element?</h3>
                <p className='mt-3 text-xl'><span className='font-bold text-2xl'>Answer: </span>If you use inline-block there are some important factors and drawbacks to keep in mind. An inline-block element is white-space dependent, so if you display list items using inline-block (in a navigation bar, for example), the list items will have unwanted space next to each other. To remove the space, you’ll have to remove from your HTML code any whitespace that occurs in between the list items.</p>
            </div>
            <hr />
        </div>
    );
};

export default Blogs;