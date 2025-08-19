import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Erreur: Clé API Resend manquante');
    return NextResponse.json(
      { error: 'Configuration du serveur email incorrecte' },
      { status: 500 }
    );
  }

  try {
    const { from, name, subject, message } = await request.json();

    if (!from || !name || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['contact@gs-lodysse.com'],
      subject: `[Contact L'Odyssée] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Message de ${name}</h2>
          <p><strong>Email:</strong> ${from}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    });

    return NextResponse.json({
      message: 'Email envoyé avec succès'
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
} 
