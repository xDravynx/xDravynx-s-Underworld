import React from "react";
import Form from "../components/Form";
import PostCard from "../components/PostCard";

function Newsfeed({ 
    posts, 
    themeColor, 
    currentEditingPost, 
    onSubmit, 
    onEdit, 
    onCancel, // Add onCancel to handle closing the form smoothly
    onDelete 
}) {
    return (
        <>
            {/* 1. Only show the "Create Post" form at the top if we aren't currently editing a post */}
            {!currentEditingPost && (
                <Form
                    titleLabel="Create Post"
                    titleColor={themeColor}
                    titlePlaceholder="Enter post title"
                    descLabel="Description"
                    descPlaceholder="Enter post description"
                    submitButtonText="Submit"
                    onSubmit={onSubmit}
                />
            )}
            
            {posts.map(post => {
                // 2. Check if this specific post is the one being edited
                const isEditingThisPost = currentEditingPost && currentEditingPost.id === post.id;

                return (
                    <React.Fragment key={post.id}>
                        {isEditingThisPost ? (
                            /* 3. Render the Form inline right here instead of the PostCard */
                            <Form
                                titleLabel="Edit Post"
                                titleColor={themeColor}
                                titlePlaceholder="Enter post title"
                                descLabel="Description"
                                descPlaceholder="Enter post description"
                                submitButtonText="Save Changes"
                                onSubmit={onSubmit}
                                editingPost={currentEditingPost}
                                onCancel={onCancel}
                            />
                        ) : (
                            /* 4. Otherwise, render the standard PostCard */
                            <PostCard
                                id={post.id}
                                avatar={post.avatar}
                                title={post.title}
                                content={post.content}
                                onEdit={() => onEdit(post.id)}
                                onDelete={() => onDelete(post.id)}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </>
    );
}

export default Newsfeed;