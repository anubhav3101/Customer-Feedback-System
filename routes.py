from flask import request, jsonify
from app import app, db
from models import Feedback, Product, User

@app.route('/feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    try:
        user = User.query.filter_by(id=data['user_id']).first()
        product = Product.query.filter_by(id=data['product_id']).first()

        if not user or not product:
            return jsonify({'error': 'Invalid user or product'}), 400

        feedback = Feedback(
            user_id=user.id,
            product_id=product.id,
            rating=data['rating'],
            comments=data.get('comments')
        )
        db.session.add(feedback)
        db.session.commit()

        return jsonify({'message': 'Feedback submitted successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/feedback/<int:product_id>', methods=['GET'])
def get_feedback(product_id):
    feedback_list = Feedback.query.filter_by(product_id=product_id).all()
    if not feedback_list:
        return jsonify({'message': 'No feedback found'}), 404

    feedback_data = [{
        'user_id': fb.user_id,
        'rating': fb.rating,
        'comments': fb.comments,
        'created_at': fb.created_at
    } for fb in feedback_list]

    return jsonify(feedback_data), 200

@app.route('/products/<int:product_id>/average-rating', methods=['GET'])
def get_average_rating(product_id):
    feedback_list = Feedback.query.filter_by(product_id=product_id).all()
    if not feedback_list:
        return jsonify({'message': 'No feedback found'}), 404

    average_rating = sum([fb.rating for fb in feedback_list]) / len(feedback_list)
    return jsonify({'average_rating': average_rating}), 200
