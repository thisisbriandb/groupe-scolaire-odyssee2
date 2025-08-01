import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';

// GET - Récupérer toutes les actualités
export async function GET() {
  try {
    const newsRef = collection(db, 'news');
    const q = query(newsRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const news = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date?.toDate?.() || doc.data().date
    }));

    return NextResponse.json(news);
  } catch (error) {
    console.error('Erreur lors de la récupération des actualités:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des actualités' },
      { status: 500 }
    );
  }
}

// POST - Créer une nouvelle actualité
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newsData = {
      title: body.title,
      content: body.content,
      image: body.image,
      author: body.author,
      category: body.category,
      isPublished: body.isPublished,
      date: new Date()
    };

    const newsRef = collection(db, 'news');
    const docRef = await addDoc(newsRef, newsData);

    return NextResponse.json({
      id: docRef.id,
      ...newsData
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'actualité:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'actualité' },
      { status: 500 }
    );
  }
} 