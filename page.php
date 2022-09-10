<?php 
get_header();
while(have_posts()){
    the_post(); // Keeps track of posts in loop ?>
    <h1>This is a page, not a post.</h1>
    <h2><?php the_title();?></h2>
    <?php the_content();?>

<?php }
get_footer();
?>