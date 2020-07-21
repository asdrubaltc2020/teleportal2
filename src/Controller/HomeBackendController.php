<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin")
 */
class HomeBackendController extends AbstractController{
    /**
     * @Route("/home", name="home_backend")
     */
    public function index(){


        return $this->render('backend/home/index.html.twig', [
            'controller_name' => 'HomeBackendController',
        ]);
    }
}
